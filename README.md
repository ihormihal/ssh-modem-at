*general error*
<CR><LF>+CME ERROR: <err><CR><LF>


# Cell info

## AT^MONSC
*–Query Serving Cell Information Through Network Monitor*

Query: AT^MONSC
Response: ^MONSC: WCDMA,472,99,10738,304,120514,2513,-79,-73,-6,6,0

\<CR\>\<LF\>^MONSC:\<RAT\>[,\<cell_paras\>]\<CR\>\<LF\>\<CR\>\<LF\>OK\<CR\>\<LF\>


### \<cell_paras\>

#### GSM

- **MCC**: Mobile Country Code, which is a decimal number
- **MNC**: Mobile Network Code, which is a decimal number
- **BAND**: Frequency Band, which is a decimal number. The value range is 0–3 ( GSM 850 / GSM 900 / GSM 1800 /  GSM1900)
- **ARFCN**: Absolute Radio Frequency Channel Number of the BCCH carrier, which is a decimal number. The value range is 0–1023.
- **BSIC**: Base Station Identity Code, which is a decimal number. The value range is 0–63.
- **Cell_ID**: Cell ID, which is a hexadecimal. The value range is 0–FFFF.
- **LAC**: Location Area Code, which is a hexadecimal. The value range is 0–FFFF.
- **RXLEV**: Receiving Signal Strength in dBm, which is a decimal number. The value range is –120–37.
- **RxQuality**: Quality of Reception, which is a decimal number. This parameter is valid in data transmission or dedicated state. The value range is 0–7.
- **TA**: Timing Advance, which is a decimal number. The value range is 0–63.

#### WCDMA

- **MCC**: Mobile Country Code, which is a decimal number
- **MNC**: Mobile Network Code, which is a decimal number
- **BAND**: Frequency Band, which is a decimal number. The value range is 0–3 ( GSM 850 / GSM 900 / GSM 1800 /  GSM1900)
- **ARFCN**: Absolute Radio Frequency Channel Number of the BCCH carrier, which is a decimal number. The value range is 0–1023.
- **PSC**: Primary Scrambling Code, which is a decimal number. The value range is 0–511
- **Cell_ID**: Cell ID, which is a hexadecimal. The value range is 0–FFFF.
- **LAC**: Location Area Code, which is a hexadecimal. The value range is 0–FFFF.
- **RSCP**: Received Signal Code Power in dBm, which is a decimal number. The value range is –120–25.
- **RXLEV**: Receiving Signal Strength in dBm, which is a decimal number. The value range is –120–37.
- **EC/N0**: Ratio of energy per modulating bit to the noise spectral density, which is a decimal number. The value range is –25–0.
- **DRX**: Discontinuous Reception Cycle Length, which is a decimal number, The value range is 6–9.
- **URA**: UTRAN Registration Area Identity, which is a decimal number, The value range is 0–65535.


## AT^MONNC
*Query Neighboring Cell Information Through Network Monitor*

Query: AT^MONNC
Response: ^MONNC: GSM,1,124,0,0,1,-79

\<CR\>\<LF\>^MONNC: \<RAT\>[,\<cell_paras\>][\<CR\>\<LF\>^MONNC: \<RAT\>[,\<cell_paras\>]][…]]\<CR\>\<LF\>\<CR\>\<LF\>OK\<CR\>\<LF\>

- **RAT**: a string indicates the access technology ( GSM / WCDMA / NONE - \<cell_paras\> will not be returned )










