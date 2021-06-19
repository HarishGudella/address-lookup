# address-lookup
## API Specification

| Name | Address Lookup |
| :---: | :---: | 
| URI | /v1/lookup?q=<Query String> |
| Method | GET |
 ###Response  
 ```json
{
  "q": "md",
  "addresses": [
    {
      "line1": "3400 N. Charles St.",
      "city": "Baltimore",
      "state": "MD",
      "zip": "21218"
    }
  ]
}
```

| Name | Address Lookup |
| :---: | :---: | 
| URI | /v2/lookup?q=<Query String> |
| Method | GET |
###Response
 ```json
{
  "q": "md",
  "addresses": [
    {
      "line_1": "3400 N. Charles St.",
      "line_2": "",
      "city": "Baltimore",
      "state": "MD",
      "zipcode": "21218"
    }
  ]
}
```