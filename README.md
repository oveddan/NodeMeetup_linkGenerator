# TDD by example linkGenerator demo code from the NYC Node.js meetup group

This is the sample built in the Test-Driven Node development talk in the NYC Node.js meetup group
It shows, commit by commit, how to built up the app using tests first.  The requirements were:

* Create an app that can generate a tracking url and shorten it.
* It emits an event with the shortened url when the url is shortened.

# Setup Instructions

## Install and Set-Up Node

On Mac:
    $ brew install node

## Install node packages

In directory of application:
    $ npm install

## Run the tests

To run unit tests:
    $ make test

To run integration tests:
    $ make testintegration