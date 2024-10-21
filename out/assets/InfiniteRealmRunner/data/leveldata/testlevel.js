export default{

    "name" : "Test Level",
    "modelid" : "testworld1",

    "objects" : {
        "powerups" : [
              {
                "type" : "dash",
                "position" : {
                    "x" : 0,
                    "y" : 0,
                    "z" : 0
                },
                "modelid" : "dashpowerup",
                "duration" : 300
             }


            ], 
        "jumppads" : [
            {
            "type" : "up",
                "position" : {
                    "x" : 0,
                    "y" : 0,
                    "z" : 0
                },
                "modelid" : "jumppad1",
                "velocity" : ".5"
            }
        
        ], 
        "collectables" : [
                 {
                "type" : "pointorb",
                    "position" : {
                        "x" : 0,
                        "y" : 0,
                        "z" : 0
                    },
                    "modelid" : "pointorb1",
                    "points" : "10"
                }

            ],

        "checkpoints" : [
             {
                "type" : "normal",
                    "position" : {
                        "x" : 0,
                        "y" : 0,
                        "z" : 0
                    },
                    "modelid" : "checkpoint1",
                    "difficulty":"normal"
                }

            ]

    } ,

    //when the player falls on them they reset "die"
    "resetplanes" : [
             {
                "position" : {
                    "x" : 0,
                    "y" : 0,
                    "z" : 0
                },
                "width": "5",
                "length" : "1000"
            }
        ]



}