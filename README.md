# Agora Front

This application controls how Agora is rendered on the page.

##Features

- [x] Display Comments
- [x] Display Gravatar for Comments
- [ ] Create Comments
- [ ] Use Stylesheet

##Usage

The [Agora API backend](https://github.com/Siecje/agora-api) needs to be running.

```HTML
<div id="agora"></div>
<script src="agora.js"></script>
<script>
  // Pass in an existing Page Id
  buildComments('1d58008c-19c6-4e0c-982d-8ab2714021ea');
</script>
```
