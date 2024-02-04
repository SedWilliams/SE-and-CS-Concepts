//ABSTACTION
//-------------------

/*
    Abstraction is the practice of hiding away details of something in order to make that thing simpler
    to use and understand.

    For example, if you are driving a car you don't need to know the inner workings of every component of the
    vehicle to know how to accelerate, you would just think 'go' and then press the gas and go. The use of the idea 'go'
    in your head is an abstraction that you have made to simplify the use of your vehicle.

    If you refer to ink, enclosed in a cartridge, with a cap on the top, and a plug on the bottom, as a "pen"
    then you are using/making an abstraction. If you refer to that pen, other pens, and all pencils, as "writing utencils
    then you are making once again an abstraction. Going a level higher throw in a case, a backpack, a laptop, and a
    water bottle, and call it "school supplies" if you want to abstract a level higher.
        - This example is paraphrased from Code Complete by Steve McConnel. I hope it aids in understanding that
          abstraction can contain various related levels scaling up and down, and also what the abstraction is at
          its roots.
    
*/

//Here is another example except using a video player (think YouTube)
class VideoPlayer {
    
    /*
        The methods below can be called and executed from outside the class without the caller really needing to
        know how this class actually plays the video, how the class pauses it, and how the class calculates what
        time the user is at in the video.
    */

    play(): string {
        //Functionality for starting the video
        
        return "Your video is playing...";
    }

    pause(): string {
        //functionality for stopping the video

        return "Your video is paused.";
    }

    getCurrentTime(): string {
        //calculations necessary to determine where you are in the video (timestamp)

        return "Your time is: *insert_time* ";
    }
}

let video: VideoPlayer = new VideoPlayer();

/*
These methods are being called and executed and you the logic behind each method is 'abstracted' away.
Meaning you are using the function without needing to know or understand the possibly complicated implementation
details.
*/
video.play();
video.pause();

/*
Abstraction is an extremely useful tool, which becomes exponentionally more important as the code you are working
with scales. The larger your codebase the more beneficial good abstractions are so that you can understand and work with more parts of the code at once.
*/






