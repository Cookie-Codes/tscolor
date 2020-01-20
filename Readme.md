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
6. Direction - direction(left | right | center)

```typescript
let t: Terminal = new Terminal();
t.bold().fire("text")
t.strike()
t.fire("StrikeText")
```


**Print with Tag**

Terminal Support Tagging so that Different Configuration Can be Saved and we do not have to call functions everytime.

**Setting tag at Runtime**

```typescript
>t.withcolor(red).bold().italic().fire(text);
>t.tag("error").set().color().red().bold().italic().underlined()

// Then
//
t.fire(text, "error")
```


**Set Tag as Values**

Use file --> terminal.conf.ts | terminal.conf.js

```js
{
  tags:
  {
    error:{

    },
    fun:{

    },
    bitchlife:{

    }
  }
}
```

# Support

# Meet me on Twitter
