## How To Run Test

1. Pastikan Operating System mengizinkan pembuatan 20000+ connection, (file konfigurasi ada di /config)
2. Copy file tes html ke document root tiap service (misal: /var/www/html, untuk Apache2)
3. Jalankan Server yang diinginkan
4. Jalankan perintah Apache benchmark <br>
ab -n (jumlah koneksi} -c (jumlah konkuren) http://(ip-server):(port) <br>
contoh: ab -n 10000 -c 10000 http://127.0.0.1:80/

## Test Result
Testing was done using Apache Benchmark

### Apache2
#### 500B file
Server Software:        Apache/2.4.29 <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            80 <br>
<br>
Document Path:          / <br>
Document Length:        500 bytes <br>

Concurrency Level:      10000 <br>
Time taken for tests:   2.139 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean |+/-sd |median   |max|
|---|---|---|---|---|---|
|Connect:|       17|  325| 456.4|     40|    1120|
|Processing:|    28|  110| 142.1|     52|    1008|
|Waiting:|       16|  100| 145.5|     43|    1008|
|Total:|         54|  435| 560.1|     88|    2087|

mean memory usage during serving : 35.7 MB


#### 20kB file
Server Software:        Apache/2.4.29 <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            80 <br>
 <br>
Document Path:          / <br>
Document Length:        20001 bytes <br>

Concurrency Level:      10000 <br>
Time taken for tests:   2.923 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min|  mean |+/-sd| median   |max|
|---|---|---|---|---|---|
|Connect:        |6  |289 |436.3     |29    |1102|
|Processing:    |24  |143 |191.3     |71    |1818|
|Waiting:        |5  |111 |201.7     |31    |1817|
|Total:         |39  |432 |577.4    |100    |2875|

mean memory usage during serving : 47.6 MB

### Nginx
#### 500B file
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
Connection Times (ms)

|             | min | mean | +/-sd | median | max |
|:----------- | ---:| ----:| -----:| ------:| ---:|
| Connect     | 207 | 327  |  64.5 |  324   | 446 |
| Processing  |  81 | 275  |  75.1 |  222   | 450 |
| Waiting     |  30 | 264  |  84.9 |  216   | 450 |
| Total       | 317 | 602  |  35.1 |  602   | 665 |
