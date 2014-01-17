# TDD by example linkGenerator demo code from the NYC Node.js meetup group

This is the sample built in the Test-Driven Node development talk in the NYC Node.js meetup group
It shows how to built up the app using tests first, commit by commit.  The requirements for the app were:

* It generates a tracking url and shortens it.
* It emits an event with the resulting url when the url is shortened.

Look for examples of using sinon spys, stubs, and mocks in the unit tests, and an integration test that focuses purely on testing connecting to an outside api.

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