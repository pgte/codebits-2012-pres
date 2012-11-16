# Woosh:

```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        6284 bytes

Concurrency Level:      10
Time taken for tests:   6.466 seconds
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      635900 bytes
HTML transferred:       628400 bytes
Requests per second:    15.46 [#/sec] (mean)
Time per request:       646.631 [ms] (mean)
Time per request:       64.663 [ms] (mean, across all concurrent requests)
Transfer rate:          96.04 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:   602  646  57.1    627     809
Waiting:        2   12   8.6      9      51
Total:        603  646  57.1    627     809

Percentage of the requests served within a certain time (ms)
  50%    627
  66%    650
  75%    651
  80%    653
  90%    808
  95%    809
  98%    809
  99%    809
 100%    809 (longest request)
 ```

 # Mustache

```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        6017 bytes

Concurrency Level:      10
Time taken for tests:   15.352 seconds
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      611700 bytes
HTML transferred:       601700 bytes
Requests per second:    6.51 [#/sec] (mean)
Time per request:       1535.173 [ms] (mean)
Time per request:       153.517 [ms] (mean, across all concurrent requests)
Transfer rate:          38.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0       3
Processing:     1 1535 4608.9      7   15294
Waiting:        1 1534 4608.9      7   15294
Total:          1 1535 4609.0      7   15295

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      8
  75%      9
  80%     11
  90%  15290
  95%  15295
  98%  15295
  99%  15295
 100%  15295 (longest request)
```