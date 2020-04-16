============================
*        Overview          *
============================
Purpose of this app is so I 
can learn Python and some 
frameworks (Flask, React, Node). 
This website will use Riot's
API to supply data to the app
about Legends of Runeterra. 
Possibly include db too for more
logic.

============================
*      How to setup        *
============================
Pre-reqs (I believe):
	* Python 3.3+
	* NodeJS

1. Clone the repo
2. Create a virtual env for Python from the Root
	i. Run this cmd in terminal (the last part is name of dir, which I called venv)
		a. Windows (py -m venv venv) 
		b. Mac/Linux (python3 -m venv venv) 
3. Activate your virtual environment (venv or whatever you named the dir)
	i. Run this cmd in terminal
		a. Windows (.\venv\Scripts\activate)
		b. Mac\Linux (source venv/bin/activate)
4. Install venv packages from requirements.txt
	i. The .txt file should be in the root, run this cmd
		a. (pip install -r requirements.txt)
5. Install node modules
	i. Navigate to the folder containing the package.json file
	ii. Run (npm install) which should install all the modules from the json file


============================
* 	    Rough Design       *
============================
Rough idea on what the website will have:

	* Home (idk what is going here)
	  |______ something from reddit?
	  |______ latest news/patch?
  	  |______ HQ pictures/promos?
	* Master's leaderboard (Top players)
	  |______ leaderboard of players
	* Deckbuilder
	  |______ Implement deck restrictions
	  |______ Menu to select which region(s) to show (max 2)
	  |______ possible filter system for spells, champs, 5 mana etc...
	  |______ way to create the deck code string
	* Card gallery (?)
	  |______ show all cards
		 |_______ picture
		 |_______ name
		 |_______ description
		 |_______ stats
		 |_______ type
	  |______ filter/sort system
	* Decks submitted (?)
	  |______ decks
		 |_______ submitted by
		 |_______ when
		 |_______ popularity? wr?
		 |_______ deck snapshot
	* Card statistics (is this possible?)
	  |______ table with tabs
		 |_______ mulligan wr
		 |_______ drawn wr
		 |_______ wr vs popularity
	  |______ sort/filter system
	* About
	  |______ why i made this