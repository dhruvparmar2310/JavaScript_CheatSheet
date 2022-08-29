# JavaScript Cheat Sheet

### JavaScript can change Html:
---

```
<p id="change">Hello World from HTML</p>
<button onclick='document.getElementById("change").innerHtml = "Hello World from JavaScript"'>Click Me to change</button>
```
Initially :
```
Hello World from HTML 
```
*Output*
```
Hello World from JavaScript
```

### JavaScript can change Style of Html:
---

```
<p id="change">Hello World from HTML</p>
<button type="button" onclick="document.getElementById('change').style.color='red'">Click Me to change color</button>
```

### JavaScript can hide and make any text visble:
---

```
<p id="demo">Hello World from Dhruv Parmar</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Hide</button>
<button type="button" onclick="document.getElementById('demo').style.display='block'">Show</button>
```
