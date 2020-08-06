# Number System Game
##
## Objective:
### - Create a browser-based game assists in teaching the user how to use the number system in a band situation. 
##
##
##
## To play the game:
### Click [here] to play the game.
##
##
## Motivation:
### When I first started to play with different bands, especially in the worship (CCM) genre, the Music Director (MD) would always call out numbers in different parts of songs. I had no clue what they were, so I had to learn what those numbers represented and engrave them in my head by reading and learning that way. I wish there were a game that helped with that. To help future musicians with this process, I decided to build this web browser game, "Number System Game."
 
## Prototype View:
### Here is an initial wire-frame of how the game will look at start-up:
![Start Screen](https://i.imgur.com/C9MoJDn.png)

### Here is what the game will look like once you press start:
![Game Screen](https://i.imgur.com/PvYuIrx.png)



## Technology Implemented:
- JavaScript
- CSS
- HTML
- Git 
- confetti.js
- animate.css

## Pseudocode:
- Click Go to get a random key.
- Prompt a random chord progression
- Show the correspondent scale of key (If it’s key of C it will prompt 7 boxes with, C-Dm-Em-F-G-Am-B, in them)
- Click the chord boxes to answer
- If the progression is wrong, game will prompt to click the chord boxes again
- If the progression is right, game will play the audio of the progression and confetti pop/animate
- Click the reset button to get a new random key and progression



# User Experience:
## User Persona #1:
### Mark works for a car rental company in Weymouth, MA.  One of his co-workers talks about the church he helps serves as the worship leader.  Mark would love to be able to join and help out with his musical talents. One problem he finds out once he goes to the first band rehearsal. He does not know what these numbers everyone keeps calling out are and how they translate into the music.  Mark wants to learn these numbers and what they mean in each key. Most importantly, to further his knowledge of music.  

## User Persona #2:
### Jim is an insane bass player and loves music.  He is one of the leading bass players at his local church and plays in cover bands all over the city.  Jim is getting tired of having to say the chords of sings instead of iterating numbers. He is looking for a way to repeatedly practice the number system so that he can give to his bandmates that do not know the number system to make playing every week so much easier. 

## Minimum Viable Product:
- As a user, I should be able to click go and get a random key and a random chord progression
- As a user, I should be able to click the row of chords that corresponds to the progression
- As a user, I should be able to see the chords I chose as my answer under "Your Answer"
- As a user, I should be able to see if I am wrong close to the bottom of the screen
- As a user, I should be able to try again once that happens
- As a user, I should be able to see if I am right close to the bottom of the screen
- As a user, I should be able to hear the sound of the progression once that happens
- As a user, I should see a reset button at the bottom of the screen to get a new random key and chord progression

## Stretch Goals:
- ~~Animated the two images on the side~~
- wiggle when page is reset for new random key and progression
- Hint light bulb button for the first chord of the progression
- Help button to explain game
