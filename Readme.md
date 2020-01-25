# Ts Colors

Terminal Colors on The go

**Creating a new Terminal**
```typescript
let t: Terminal = new Terminal();
```

**Do Default Style**
1. Bold - bold()
2. Underline - underline()
3. StrikeThrough - strike()
4. italic - italic()
5. Intendentation - indent(3)

```typescript
let t: Terminal = new Terminal();
t.bold().log("text")
```


**Print with Tag**

Terminal Support Tagging so that Different Configuration Can be Saved and we do not have to call functions everytime.

**Setting tag**

```typescript
>t.tag("error").color().red().bold().italic().underlined()


/**
 * @param text text to pring
 * @param tag tag you generated
 * @returns Tag differnet from default terminal tag
 */
t.log(text, "error")
```

# Support & Suggestions
- accepted

# Meet me on Twitter

## [![alt text][1.1]][1]

[1.1]: http://i.imgur.com/tXSoThF.png
[1]:https://twitter.com/al_chudhari
