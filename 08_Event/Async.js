/*
Async Code

About Java Script
Java Script
        |-> Synchronous // it is By Default Syncronize
        |-> Single Thread // it is an Single Thread Language

Execution Context
        |-> execute One By One line at a time    //Each Operation Wait for one last one to execute


        Blocking Code                   VS          Non Blocking code
        -------------                   ---        --------------------
        |-> Block the Flow of Program   |   |-> Does Not Block The Following Code
        |-> Read File Sync



=========== JS Engine ==========
_________________________________
|                               |
|         MEMORY HEAp           |
|        _______________        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        |             |        |
|        ~~~~~~~~~~~~~~~~       |
|                               | High Priority                  ______________
|        Call StacK             |<<<<<<<<<================= <<---| TAsk Queue | <<--- Promis  ( Fetch()  )
|        _______________        |// promise added to callStack with high Priority
|        |             |        |
|        |             |        | Added to Call Stack
|        |             |        |<<<<<<<<<================= <<---| TAsk Queue | <<--- Set Interval, SetTimeOut
|        |             |        |
|        |fn()Funct n  |        |
|        |fn()Funct 3  |        |
|        |fn()Funct 2  |        |
|        |fn()Funct 1  |        |
|        |   GloBal    |        |
|        ~~~~~~~~~~~~~~~~       |
|                               |
|                               |

+-------------------+-------------------+-------------------------------------+
| JavaScript Engine | Web API           | Task Queue                         |
+-------------------+-------------------+-------------------------------------+
| Memory Heap       | DOM API           | Callback (CB)                      |
|                   | setTimeout        | Callback (CB)                      |
|                   | setInterval       |                                     |
| Call Stack        | fetch()           |                                     |
| - fn (Function 3) | Register Callback |                                     |
| - fn (Function 2) |                   |                                     |
| - fn (Function 1) |                   |                                     |
| - Global          |                   |                                     |
+-------------------+-------------------+-------------------------------------+
| Event Loop                                                                |
| - Monitors Call Stack and Task Queue                                      |
| - Adds Callbacks to Call Stack when empty                                 |
+--------------------------------------------------------------------------+






*/