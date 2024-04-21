/******************************************************************************
* (c) 2005-2019 Copyright, Real-Time Innovations.  All rights reserved.       *
* No duplications, whole or partial, manual or electronic, may be made        *
* without express written permission.  Any such copies, or revisions thereof, *
* must display this notice unaltered.                                         *
* This code contains trade secrets of Real-Time Innovations, Inc.             *
******************************************************************************/

const path = require('path')
const rti = require('rticonnextdds-connector')
const configFile = path.join(__dirname, '/../ShapeExample.xml')

const run = async () => {
  const connector = new rti.Connector('MyParticipantLibrary::MySubParticipant', configFile)
  const input = connector.getInput('MySubscriber::MyReader')
  try {
    console.log('Waiting for publications...')
    await input.waitForPublications()

    console.log('Waiting for data...')
    for (let i = 0; i < 20; i++) {
      await input.wait()
      input.take()
      for (const sample of input.samples.validDataIter) {
        // You can obtain all the fields as a JSON object
        const data = sample.getJson()

        const device_id = data.device_id
        const device_name = data.device_name
        const device_number = data.device_number
        const device_properties = data.device_properties
        const upper_linked_device_id = data.upper_linked_device_id
        const lower_linked_device_id = data.lower_linked_device_id

        console.log('Received device_id: ' + device_id + ', device_name: ' + device_name + ', device_number: ' + device_number + ', device_properties: ' + device_properties + ', upper_linked_device_id: ' + upper_linked_device_id + ', lower_linked_device_id: ' + lower_linked_device_id)
      }
    }
  } catch (err) {
    console.log('Error encountered: ' + err)
  }
  connector.close()
}

run()
