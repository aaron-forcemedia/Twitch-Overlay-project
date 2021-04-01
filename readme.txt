Twitch Overlay Simulator
Aaron Wilson


Internet connection required to view GIFs.

The purpose of this site is to simulate a Twitch gaming overlay designed to display 
on screen graphics when twitch users interact with the channel's chat & stream. 
These actions will be displayed in real time as the user interaction occurs. The goal of this
project is to later connect this application with a Twitch API and use in real time. 

To simulate anti-spamming measures each action can only be performed once. The total amount of 
actions taken can be tracked in the second alert box from the Info option. Refresh browser to 
reset all counters & username. 

Eventually, the username will be automatically recieved from the API as well as events & actions. 

Please enjoy this work in progress. The intended design uses a transparent background and will 
be overlayed onto a livestream of a video game in progress using Open Broadcaster Software (OBS).

Project Requirements met:

--Media Queries adjust menu. Both are designed with different mobile platforms in mind. 
Since this is desinged to be used with OBS (Open Broadcaster Software) the maximized browser window is ideal.
The vertical viewing option displays GIF & Text in one grid column.

--CSS--
Menu switches between vertical and horizontal styles at different pixel widths. 

Flexbox used to organize menu.

CSS Grid used to organize GIF & Text at different media queries; 
When in landscape mode GIF & Text will be displayed horizontally. (#container)


--Javascript--
Show/hide one or more content areas through clicking menu;

Use of a timer to perform Javascript function.

Javascript performs mathematical operation in the info() function. 
After the initial alert the second alert keeps a running total of the amount of actions taken.