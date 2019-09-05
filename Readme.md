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

mean memory usage during serving : 25.32 MB (only the serving worker)

#### 20kB file
Server Software:        nginx/1.14.0 <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            80 <br>
 <br>
Document Path:          /index20.html <br>
Document Length:        20001 bytes <br>
 <br>
Concurrency Level:      10000 <br>
Time taken for tests:   1.016 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean |+/-sd| median   |max|
|---|---|---|---|---|---|
|Connect:      |169  |299  |76.9    |297     |435|
|Processing:    |97  |257  |61.6    |231     |416|
|Waiting:       |18  |228  |84.2    |203     |416|
|Total:        |268  |556  |35.2    |552     |638|

mean memory usage during serving : 28.76 MB (only the serving worker)

## Libevent C
## How To Run Test

1. Pastikan Operating System mengizinkan pembuatan 20000+ connection, (file konfigurasi ada di /config)
2. Pastikan library libevent sudah terinstall di PC anda
3. Compile source code dengan menjalankan perintah `make` pada folder **libevent**
4. Jalankan web server dengan perintah `./c-server <nama_file>` dengan `<nama_file>` diisi dengan `../html_files/index500.html` untuk testing 500B file dan `../html_files/index20.html` untuk testing 20kb file pada folder **libevent**
4. Jalankan perintah Apache benchmark <br>
ab -n (jumlah koneksi} -c (jumlah konkuren) http://(ip-server):(port) <br>
contoh: ab -n 10000 -c 10000 http://127.0.0.1:8080/

## Test Result
Libevent library :
 - libevent-dev 
 - libevent-extra-2.1-6 
 - libevent-openssl-2.1-6
 - libevent-pthreads-2.1-6
 
Testing was done using Apache Benchmark

#### 500B file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        501 bytes <br>
 <br>
Concurrency Level:      10000 <br>
Time taken for tests:   0.508 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean|+/-sd |median   |max|
|---|---|---|---|---|---|
|Connect:        |107  |160 |32.2    |158    |240|
|Processing:   |126 |139 |12.3   |138    |166|
|Waiting:      |84 |122 |25.1   |125    |166|
|Total:        |272 |298 |21.3   |295    |366|

mean memory usage during serving : 21.91 MB (measured on first run after server turned on)

#### 20kB file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        20001 bytes <br>
 <br>
Concurrency Level:      10000 <br>
Time taken for tests:   1.173 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean |+/-sd |median   |max|
|---|---|---|---|---|---|
|Connect:        |106  |160 |31.4   |159    |222|
|Processing:   |106 |791 |106.8   |816    |850|
|Waiting:       |101 |630 |157.7   |686    |708|
|Total:        |327 |951 |91.2   |972    |989|

mean memory usage during serving : 268.12 MB (measured on first run after server turned on)

## Node.js
## How To Run Test

1. Pastikan Operating System mengizinkan pembuatan 20000+ connection, (file konfigurasi ada di /config)
2. Jalankan node server dengan perintah <br>
"node --nouse-idle-notification --expose-gc serve.js index500.html"<br>
dimana index500.html adalah nama file pada folder html_files <br>
opsi --nouse-idle-notification dan --expose-gc digunakan untuk mematikan auto garbage collection
4. Jalankan perintah Apache benchmark <br>
ab -n (jumlah koneksi} -c (jumlah konkuren) http://(ip-server):(port) <br>
contoh: ab -n 10000 -c 10000 http://127.0.0.1:8080/

## Test Result
node v10.16.3
Testing was done using Apache Benchmark

#### 500B file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        501 bytes <br>
 <br>
Concurrency Level:      10000 <br>
Time taken for tests:   4.646 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean|+/-sd |median   |max|
|---|---|---|---|---|---|
|Connect:        |0  |412 |354.7    |285    |1095|
|Processing:   |329 |2021 |963.5   |2280    |3472|
|Waiting:      |159 |1996 |1002.5   |2278    |3471|
|Total:        |738 |2433 |1135.2   |2501    |4529|

mean memory usage during serving : 87.175 MB (measured on first run after server turned on)

#### 20kB file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        20001 bytes <br>
 <br>
Concurrency Level:      10000 <br>
Time taken for tests:   4.406 seconds <br>
Complete requests:      10000

Connection Times (ms)

|              |min  |mean |+/-sd |median   |max|
|---|---|---|---|---|---|
|Connect:        |0  |607 |471.0   |1015    |1071|
|Processing:   |125 |1644 |835.5   |1493    |3254|
|Waiting:       |66 |1638 |842.2   |1490    |3251|
|Total:        |388 |2252 |1203.0   |2430    |4288|

## Tornado -- Python Library
## How To Run Test

1. Pastikan Operating System mengizinkan pembuatan 20000+ connection, (file konfigurasi ada di /config)
2. Jalankan node server dengan perintah <br>
`python tserver.py index500.html` pada folder tornado<br>
dimana index500.html adalah nama file pada folder html_files <br>
4. Jalankan perintah Apache benchmark <br>
`ab -n (jumlah koneksi} -c (jumlah konkuren) http://(ip-server):(port)` <br>
contoh: `ab -n 10000 -c 10000 http://127.0.0.1:8080/`

## Test Result
Testing was done using Apache Benchmark

#### 500B file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        501 bytes <br>
 <br>
Max completed requests:      8813<br>
**(failed to solve C10K problem)**

mean memory usage during serving : 31.45 MB (measured on first run after server turned on)

#### 20kB file
Server Software:         <br>
Server Hostname:        127.0.0.1 <br>
Server Port:            8080 <br>
 <br>
Document Path:          / <br>
Document Length:        20001 bytes <br>
 <br>
Max completed requests:      7264 <br>
**(failed to solve C10K problem)**

mean memory usage during serving : 38.79 MB (measured on first run after server turned on)