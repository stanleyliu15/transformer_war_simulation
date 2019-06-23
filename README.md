# In-House Transformers Server: The Front-End Take-Home assignment of Front-End Take-Home assignments

## Configuration 
```
npm install
npm run start

(In a new terminal)
cd app
npm install
npm run start
```

## Preamble
We know take-home tests are lame and we greatly appreciate you doing this; we’ve tried to
structure this one so that it’s

  a) Not too much of your time

  b) Possibly entertaining

We know you’re busy; your submission will not be evaluated on length of time spent, nor is
there a hard time limit. =) It’s designed to let you show off how you code and would work
with the stack we’ve got.

Please feel free to ask questions at any time by E-mailing justice@in-house.com and we’ll be
happy to answer!

## The assignment itself
The Transformers. The Autobots and Decepticons are a race of mechanical beings at war on
the planet Cybertron. They have been battling it out for centuries but have decided that the
only real way to end their war is through a computerized simulation.

(You might naively think that this is an unrealistic way for a millenia old race to resolve their
galactic civil war, but there’s actually [previous precedent](https://tfwiki.net/wiki/Afterdeath!).)

## About the Transformers
Every Transformer has the following properties (an example of which is handily denoted here):
  * Allegiance (A Transformer can only be an Autobot or a Decepticon)
  * Name (A string of up to 40 characters)
  * Strength (1 through 10)
  * Intelligence (1 through 10)
  * Speed (1 through 10)
  * Endurance (1 through 10)
  * Rank (1 through 10)
  * Courage (1 through 10)
  * Firepower (1 through 10)
  * Skill (1 through 10)

A Transformer’s “overall rating” is the sum of every property other than Allegiance.

## Mission details
So Wheeljack and Brainstorm have actually built a simulation that allows for the following
actions:

1. Adding a new Transformer

2. Retrieving the details of a registered Transformer

3. Updating a Transformer

4. Removing a registered Transformer

5. Getting a list of all the registered Autobots, sorted alphabetically

6. Getting a list of all the registered Decepticons, sorted alphabetically

7. Running the war between the list of Transformers currently registered and returning a
list of the victors

However, the bad news is that they only went as far as building an API that returns JSON
objects. Not really something Autobot or human friendly! That’s where you come in.

The Autobots are providing you with the API that allows for the simulation - what they need
from you is a small React app that does the following:
* Provides an interface for 1, 2, 3, 4, 5, and 6 but with a restriction:
  * if the Transformers rank is 8 or above, their data cannot be changed through the UI (only deleted and recreated). The API doesn’t carry this restriction, but the UI should.
* Allowing a user to see a Transformer’s tech spec represented graphically.
* Implements point 7 (you can use the APIs for 5 and 6 if so inclined) by displaying the result of the war in a somewhat aesthetically pleasing manner =)

Technical notes
* The user interface should be built using React.  It's up to you what other libraries you choose to use for the assignment; just let us know what they are in the README of your repo.
* Likewise your choice of routes is up to you.
* This repository is a complete API server, written in
node.js and using an in-memory SqlLite database preloaded with 10 entries. Swagger
documentation exists at localhost:3456/api-docs for you to see and play with the
different API methods at your disposal. The code is also (obviously) available for you to
read if you’d like to understand how things work.
* You are welcome to use whatever other open-source packages you like in your
submission - just highlight what you used (and why) when you submit.

## War Simulation Details

Note: the below conditions are already handled for you as part of the War implementation of
the API. However, as there are special conditions that might warrant special display cases -
hint hint - the details of how the war works have been provided to you.

The war is a sequence of battles between the registered Autobots and Decepticons. The
Autobots and Decepticons 
are sorted by rank (highest rank first), and then battles run in pairs
(e.g. Autobot 1 vs. Decepticon 1, Autobot 2 vs Decepticon 2, etc.) until there are no more pairs
left to evaluate.

Rules of battle (in order of preference):

* If a Transformer is named Optimus or Predaking, the battle ends automatically with
them as the victor
* If Transformer A exceeds Transformer B in strength by 3 or more and Transformer B
has less than 5 courage, the battle is won by Transformer A (Transformer B ran away)
* If Transformer A’s skill rating exceeds Transformer B's rating by 5 or more, Transformer
A wins the fight.
* Otherwise, the victor is whomever of Transformer A and B has the higher overall rating.
(You can determine what to do in the event of a tie between two robots).

The end result of a war should be a list of the battles fought (along with the victor/loser), and
the survivors/victors on each side.

The sides do not have to be equal numbers to have a war. For example, 5 Autobots vs. 3
Decepticons should only have 3 battles, with the other 2 Decepticons being counted as
survivors.

Special note: if Optimus is on one team and Predaking is on the other team, the war ends
**with no victors on either side. **

## Assignment submission
When you’re happy with what you have, upload your completed assignment to Github. The
completed assignment should:
* Be runnable once pulled down (or with configuration instructions provided)
If you’d prefer to have the repo private, please add the following Github users as a reader:
justicegray

A public repo is all right as well, it’s totally up to you.

Once you’ve done that, send an E-mail to the following E-mail address:
justice@in-house.com

And we'll be in touch within 24-48 hours!
