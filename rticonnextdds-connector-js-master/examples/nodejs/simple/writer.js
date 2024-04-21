/******************************************************************************
* (c) 2005-2019 Copyright, Real-Time Innovations.  All rights reserved.       *
* No duplications, whole or partial, manual or electronic, may be made        *
* without express written permission.  Any such copies, or revisions thereof, *
* must display this notice unaltered.                                         *
* This code contains trade secrets of Real-Time Innovations, Inc.             *
******************************************************************************/

const sleep = require('sleep')
const path = require('path')
const rti = require('rticonnextdds-connector')
const configFile = path.join(__dirname, '/../ShapeExample.xml')

const run = async () => {
  const connector = new rti.Connector('MyParticipantLibrary::MyPubParticipant', configFile)
  const output = connector.getOutput('MyPublisher::MyWriter')
  try {
    console.log('Waiting for subscriptions...')
    await output.waitForSubscriptions()

    console.log('Writing...')
    for (let i = 0; i < 20; i++) {
      output.instance.setNumber('device_id', 12746573)
      output.instance.setString('device_name', 'sjrtn')
      output.instance.setNumber('device_number', 3026433)
      output.instance.setString('device_properties', 'ajedth')
      output.instance.setNumber('upper_linked_device_id', 2534745)
      output.instance.setNumber('lower_linked_device_id', 2468945)

      output.write()

      sleep.msleep(4000)
    }

    console.log('Exiting...')
    // Wait for all subscriptions to receive the data before exiting
    await output.wait()
  } catch (err) {
    console.log('Error encountered: ' + err)
  }
  connector.close()
}

run()
