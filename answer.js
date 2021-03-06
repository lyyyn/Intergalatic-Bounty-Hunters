// Read/Query
// Do a query to see all the bounties
/* db.bounties.find().pretty() */

// Do a query to find the bounty whose client is Time Bureau
/* db.bounties.find({ client : 'Time Bureau' }).pretty() */

// Do a query to find the bounties who have been captured
/* db.bounties.find({ captured : true }).pretty() */

// Do a query specific to the bounty you inserted
/* db.bounties.insert ({
        name : 'My Son',
        wantedFor : 'Flooding the bedroom',
        client : 'Lina',
        ship : 'NaiNai',
        reward : 1000,
        hunters : [
                'Husband',
                'Maid'
        ],
        captured : false
}) 

   db.bounties.find({ client : 'Lina' }).pretty() */

// Do a query to just return the names of all the bounties
/* db.bounties.find({},{
    name : 1,
    _id: -1
}).pretty() */

// Remove
// Starbuck and the Captain have come to an understanding. Remove her record
/* db.bounties.remove({
    name : 'Starbuck'
}) */
// find and remove the duplicate record - be sure to JUST remove the one copy
/* db.bounties.deleteOne({
    name : 'Han Solo'
}) */

// Update
// Update Sara Lance's name to be her superhero alias 'White Canary'
/* db.bounties.update({
    name: 'Sara Lance'
},
{
    $set: { name: 'White Canary'}
}) */

// Update Rocket's ship to be The Milano 2
/* db.bounties.update({
    ship: 'The Milano'
},
{
    $set: { ship: 'The Milano 2'}
}) */

// Find the INTERMEDIATE_MONGO.md under Advanced Mongo folder in the instructor notes directory. Follow through each of the explanations. Follow the commands and perform appropriate finds after each update call to see the results

// Find the bounties that are greater than 100000
/* db.bounties.find({
    reward: { $gt: 100000 }
}).pretty() */

// Find the bounties that are less than 1000
/* db.bounties.find({
    reward: { $lt: 1000 }
}).pretty() */

// Find the bounties that are less than or equal to 1000
/* db.bounties.find({
    reward: { $lte: 1000 }
}).pretty() */

// Find the bounty with the hunter Nebula
/* db.bounties.find({
    hunters: 'Nebula' 
}).pretty() */

// Find the bounty with the ship Waverider OR Serenity
/* db.bounties.find({ 
    $or: [
        { ship: 'Waverider' },
        { ship: 'Serenity' }
    ]
}).pretty() */

// Find the bounty who is not captured AND has whose client is Ayesha High Priestess of the Sovereign
/* db.bounties.find({ 
    captured:false,
    client: 'Ayesha High Priestess of the Sovereign'
}).pretty() */

// Increase all the bounties by 333333
/* db.bounties.updateMany({},
    { $inc: { reward: 333333 }}) */

// Multiply all the bounties by 2
/* db.bounties.updateMany({},
    { $mul: { reward: 2 }}) */

// Add Bobba Fett as a hunter for Malcolm Reynolds
/* db.bounties.update({ name: 'Malcolm Reynolds' },
    { $push: { hunters: 'Bobba Fett' } }) */

// Add Bobba Fett as a hunter for the one that has the ship Waverider
/* db.bounties.update({ ship: 'Waverider' },
    { $push: { hunters: 'Bobba Fett' } }) */

// Find and remove Dengar the bounty hunter
/* db.bounties.update({ hunters: 'Dengar' },
    { $pull: { hunters: 'Dengar' } }) */

// Upserts will insert a value if it doesn't exist, if it does it will update it
// Try giving a new field of lastSeen to Han Solo, with the property yesterday set upsert to true
/* db.bounties.update({ name: 'Han Solo' },
    { $set: { lastSeen: 'Yesterday' } },
    { upsert : true }) */

// Try giving all bounties a new field of lastSeen - with a value of last week and set upsert to false
/* db.bounties.updateMany({},
    { $set: { lastSeen: 'Last Week' } },
    { upsert : false }) */