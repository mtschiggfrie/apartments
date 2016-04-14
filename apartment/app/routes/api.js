var Apartment = require('../models/Apartment');
var Amenity = require('../models/Amenity');
var Contact = require('../models/Contact');
var Home = require('../models/Home');


//ROUTES FOR API


module.exports = function(app, express){

//get an instance of the express router
var apiRouter = express.Router();

//middleware to use for all requests
apiRouter.use(function(req, res, next) {
  console.log('Hello There!');
  next();
});

apiRouter.get('/', function(req, res) {
  res.json({ message: 'This is the api!' });
});




//apartment routes
apiRouter.route('/apartments')

  .post(function(req, res) {
    var apartment = new Apartment();
    apartment.name = req.body.name;
    apartment.price = req.body.price;
    apartment.sqfeet = req.body.sqfeet;
    apartment.description = req.body.description;
    apartment.image = req.body.image;
    var details = req.body.details;
    if(req.body.details.contains(",")){
      var array = details.split(",");
      apartment.details = array;
    }
    apartment.save(function(err) {
      if (err) {
          return res.send(err);
      }
      res.json({ message: 'Apartment Created' });
    });
  })

  .get(function(req, res) {
    Apartment.find(function(err, apartments) {
      if (err) res.send(err);

      res.json(apartments);
    });
  });



  //apartment routes for get view
  apiRouter.route('/apartments/view/:apartment_id')

    //get the user with the id
    .get(function(req, res){
      Apartment.findById(req.params.apartment_id, function(err, apartment){
        if (err) res.send(err);

        //return apartment
        res.json(apartment)
      });
    })





//apartment routes for individual (get, update, delete)
apiRouter.route('/apartments/:apartment_id')

  //get the user with the id
  .get(function(req, res){
    Apartment.findById(req.params.apartment_id, function(err, apartment){
      if (err) res.send(err);

      //return apartment
      res.json(apartment)
    });
  })

  .put(function(req, res){
    Apartment.findById(req.params.apartment_id, function(err, apartment){
      if (err) res.send(err);

      //update the info only if it is new
      if (req.body.name) apartment.name = req.body.name;
      if (req.body.price) apartment.price = req.body.price;
      if (req.body.sqfeet) apartment.sqfeet = req.body.sqfeet;
      if (req.body.description) apartment.description = req.body.description;
      if (req.body.image) apartment.image = req.body.image;

      var details  = JSON.stringify(req.body.details)
      var array = details.split(",");

      for (i = 0; i < array.length - 1; ++i) {
        array[i] = array[i].substring(array[i].indexOf("\"") + 1);
        array[i] = array[i].split("\"")[0];
      }
      array[array.length - 1] = array[array.length - 1].split("\"")[0];

      apartment.details = array;

      apartment.save(function(err) {
        if (err) res.send(err);

        res.json({ message: 'apartmend updated!' });
      });

    });
  })

  .delete(function(req, res){
    Apartment.remove({
      _id: req.params.apartment_id
    }, function(err, apartment) {
      if (err) res.send(err);

      res.json({ message: 'succesfully deleted' });
    })
  })






  //Amenity Routes
  apiRouter.route('/amenities')


    .post(function(req, res) {
      var newAmenity = new Amenity();
      newAmenity.amenity = req.body.amenity;
      newAmenity.save(function(err) {
        if (err) {
            return res.send(err);
        }
        res.json({ message: 'Apartment Created' });
      });
    })

    .get(function(req, res) {
      Amenity.find(function(err, amenities) {
        if (err) res.send(err);

        res.json(amenities);
      });
    })


apiRouter.route('/amenities/:amenity_id')

.delete(function(req, res){
  Amenity.remove({
    _id: req.params.amenity_id
  }, function(err, amenity) {
    if (err) res.send(err);

    res.json({ message: 'succesfully deleted' });
  })
})






//Contact Routes
apiRouter.route('/contact')


  .get(function(req, res) {
    Contact.find(function(err, contacts) {
      if (err) res.send(err);

      res.json(contacts);
    });
  })

  .post(function(req, res) {
    var newContact = new Contact();
    newContact.number = req.body.number;
    newContact.address = req.body.address;
    newContact.email = req.body.email;
    newContact.emergencyNumber = req.body.emergencyNumber;
    var array =  req.body.officeHours.split(',');
    newContact.officeHours = array;
    newContact.save(function(err) {
      if (err) {
          return res.send(err);
      }
      res.json({ message: 'Contact Created' });
    });
  })


  apiRouter.route('/contact/:contact_id')

  .delete(function(req, res){
    Contact.remove({
      _id: req.params.contact_id
    }, function(err, contact) {
      if (err) res.send(err);

      res.json({ message: 'succesfully deleted' });
    })
  })




  //Contact Routes
  apiRouter.route('/home')


    .get(function(req, res) {
      Home.find(function(err, homes) {
        if (err) res.send(err);

        res.json(homes);
      });
    })

    .post(function(req, res) {
      var newHome = new Home();
      newHome.image = req.body.image;
      newHome.save(function(err) {
        if (err) {
            return res.send(err);
        }
        res.json({ message: 'Home Created' });
      });
    })

    apiRouter.route('/home/:home_id')

    .delete(function(req, res){
      Home.remove({
        _id: req.params.home_id
      }, function(err, home) {
        if (err) res.send(err);

        res.json({ message: 'succesfully deleted' });
      })
    })

return apiRouter;
};
