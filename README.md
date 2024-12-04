# Expo Constants.deviceId Inconsistency

This repository demonstrates a bug in Expo's `Constants.deviceId` where the value changes unexpectedly between app sessions on the same device.  This makes it unreliable for uniquely identifying devices.

## Bug Description

The `Constants.deviceId` is intended to provide a unique identifier for a device. However, it has been observed to change between app launches, even without reinstalling the app or clearing data.  This unpredictable behavior breaks any reliance on this ID for associating persistent data with the device.

## Reproduction

The `bug.js` file provides a simple example of how to reproduce the problem. Run the app, record the `deviceId`, close the app, and then run it again.  Observe that the `deviceId` may be different.

## Solution

The recommended solution involves using a more reliable method for device identification, such as leveraging Expo's SecureStore to store a unique device identifier upon the first launch and retrieve it in subsequent sessions.  The `bugSolution.js` shows an implementation of this approach.

## Note

While other approaches may exist, using SecureStore offers a balance of user privacy and reliable device identification.