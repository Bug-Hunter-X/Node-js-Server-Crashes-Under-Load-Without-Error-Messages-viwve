# Node.js Server Crashing Under Load

This repository demonstrates a common issue in Node.js where a server crashes under heavy load without providing helpful error messages. The server uses the built-in `http` module and works correctly under low traffic. However, when a large number of requests are made concurrently, the server unexpectedly crashes.

## Problem

The `server.js` file contains a simple Node.js HTTP server.  The problem lies in how it handles a high volume of requests, leading to a crash without any meaningful error logs.

## Solution

The `server-solution.js` file provides a fix by utilizing the `cluster` module to utilize multiple processes for handling the load and gracefully handling errors.  This approach allows the server to scale better and maintain stability.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `npm install` to install any necessary dependencies (although this example doesn't require external modules).
4. Run `node server.js` to start the original, buggy server.
5. Run `node server-solution.js` to start the improved, more stable server.

Test the server with a load testing tool such as k6 or Apache Bench to simulate high traffic.