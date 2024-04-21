# rti_cpp_js

### 1. File Tree

This project is provided under the root folder.

    .
    ├─2_hello_world
    │  │  hello_world.idl
    │  ├─c++11
    │  ├─c++98
    │  ├─csharp
    │  └─python
    │
    └─rticonnextdds-connector-js-master
       │  .eslintrc.json
       │  ...
       ├─docs
       ├─examples
       │  └─nodejs
       │      │  ShapeExample.xml
       │      ├─simple
       │      ├─transformation
       │      ├─web_http
       │      └─web_socket
       ├─node_modules
       └─test

### 2. Environment and Start

1. Codes under `./2_hello_world/c++11/` and `hello_world.idl` were modeified. Accordingly, Follow step 12-16 in Section B2 to build the RTI Connext DDS (C++) project.

2. Codes under `./rticonnextdds-connector-js-master/` were also modified (the original project could be got from [here](https://github.com/rticommunity/rticonnextdds-connector-js/tree/master)). 

3. Run your node.js reader as follows: 

   ```
   node examples/nodejs/simple/reader.js
   ```

4. Run your C++ publisher as step 14 in Section B2.

5. Succeed!

### 3. [Defining a DDS System](https://community.rti.com/static/documentation/connector/current/api/javascript/configuration.html)
