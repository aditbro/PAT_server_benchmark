## Test Result
Testing was done using Apache Benchmark

### Apache2
#### 500kB file
Server Software:        Apache/2.4.29 <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            80 <br>
<br>
Document Path:          / <br>
Document Length:        500 bytes <br>

Concurrency Level:      10000 <br>
Time taken for tests:   23.727 seconds <br>
Complete requests:      10000

Connection Times (ms) <br>
|                 |         min|mean|[+/-sd]| median | max |
|-----------------|------------|----|-------|--------|-----|
|Connect:         |0           |338 |475.4  |8       |1062 |
|Processing:      |1           |300 |799.9  |21      |4041 |
|Waiting:         |1           |297 |801.0  |17      |4041 |
|Total:           |1           |638 |1117.0 |28      |5081 |

### Nginx
#### 500kB file
Server Software:        nginx/1.14.0 <br> 
Server Hostname:        127.0.0.1 <br>
Server Port:            80 <br>
<br>
Document Path:          / <br>
Document Length:        501 bytes <br>
<br>
Concurrency Level:      10000 <br>
Time taken for tests:   1.099 seconds <br>
Complete requests:      10000 <br>
<br>
Connection Times (ms) <br>
|            |min |mean|[+/-sd]|median |max|
|------------|----|----|-------|-------|---|
|Connect:    | 207| 327|  64.5 |  324  |446|
|Processing: |  81| 275|  75.1 |  222  |450|
|Waiting:    |  30| 264|  84.9 |  216  |450|
|Total:      | 317| 602|  35.1 |  602  |665|
