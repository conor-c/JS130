## Regex is also sometimes referred to as a pattern. Regex is the plural of regex.

### Uses of Regex
- Check whether the pattern "ss" appears in the string "Mississippi".
- Check whether the letter "i" occurs three or more times in "Mississippi".
- Find and replace all instances of "Mrs" with "Ms" in a document.
- Does a file name begin with "Bob" and end with ".txt" or ".md"?
- Does a string have any non-alphanumeric characters in it?
- Did the user enter a valid integer?
- Are there any whitespace characters in the string?
- Find and replace all non-alphanumeric characters in a string with "-".
- Locate all email addresses in a document.
- Split a line of text into fields assuming that each whitespace character delimits two values.

As you can tell, there are a multitude of uses for Regex, and the ability to understand and implement Regex can result in a massive amount of saved time.

#### Regex are strings of characters between two forward slashes /
- `/cat/` is a regex pattern that matches the string "cat" anywhere it occurs in some text. So `/cat/` would match `cat, scat, catalog, scatter` but it would *not* match `Cat, c a t`
- It would be easy to implement this regex, but it would also be fairly easy to avoid using regex in such a simple case, which might actually be more straightforward.
- A more complicated regex pattern: `/\bhttps?:\/\/\S+\?/` matches any web URL that contains a query string, regardless of http or https.
- *Regex is used for string processing*

##### Regex is case-sensitive by default.

One way to actually *use* Regex in JS is through the `match` method.
```js
let str = 'cast';
if (str.match(/s/)) {
  console.log("matched 's'");
}

if (str.match(/x/)) {
  console.log("matched 'x'");
}

// matched 's' gets logged
```
##### match takes a single regex argument and a String caller.

Matching alphanumeric characters with regex is relatively straightforward.

Special Characters can get a little more complex as some special characters have specific meanings in Regex.
` $ ^ * + ? . ( ) [ ] { } | \ / ` all are used in Regex and have special meanings, these are called *meta-characters*

### Meta-Characters can still be matched, but they must be escaped with a leading backslash.
- To match a question mark, for example, you would use the regex: `/\?/`
- (inside square brackets, (character classes)) the rules for meta-characters are different
- Some regex variants have different meta-characters (notably, vim)
- Avoid escaping non-meta characters that are special (as a general rule, but you may be able to get a way with it in many flavors of regex).


#### Concatenation
- *Its possible to concatenate two or more patterns into a new pattern*
  - This pattern matches each of the originals (patterns) in sequence.
  - `/cat/` is the concatenation of `/c/` `/a/` `/t/`
  - Concatenation works with Patterns, not characters.
    - What does this mean in practice? It means the `/cat/` is a pattern that consists of matching the result of a match with 'c', 'a', 't', all being together.
- Because the result of concatenating a lot of patterns together can get unwieldy and hard to read. Regex is often considered a "write-only expression" or "line-noise". If some refactoring can prevent the need of a complex regex pattern, that is often preferred as it is easier to maintain and understand.
  - As a result, only use Regex when the code demands it.

#### Alternation (the repeated occurrence of two things in turn)
- A simple way to create a regex pattern that matches one of several sub-patterns is to use the | (pipe) character. And surround the entire expression in parentheses.
  - `/(cat|dog|rabbit)/` would match with any string that is 'cat', 'dog', or 'rabbit'.
  - NOTE: parentheses and pipes are meta-characters, but we don't need to escape them because we are not attempting to match the literal meta-character, we are just using them AS meta characters.
  
#### Control Character Escapes
- Use a control character escape in a string when wanting to match with non-visual characters (such as line feeds, carriage returns, and tabs).
  - `\n` matches with line feeds
  - `\r` matches with carriage returns
  - `\t` matches with tabs
- Not everything that looks like a control character escape is an actual control character escape. (some have special meanings, some mean nothing at all)

#### Ignoring Case
  - You can utilize the flag/modifier `i` appended to the close `/` of the regex pattern if you want the pattern to match both upper and lower case characters.

#### Character Class
- Patterns that let you specify a set of characters to match.
- Uses a list of characters between [] (square brackets). Matches a single occurrence of *any* of the characters between the brackets.
- An example of the usefulness of a character class:
```js
// if given the option between 1-5, an easy way to validate is with regex
// character class
/[12345]/ // would match any given string with a 1-5 result.
/[nyNY]/ // would match n, y, N, Y, which is useful if a prompt of n/y is required
```
- Single character classes can be useful, don't remove a single character from a character class assuming it does nothing.
- When writing character classes, group by type:
  - digits, uppercase letters, lowercase letters, whitespace, and non-alphanumeric characters
  - (for readability)
- You can concatenate any pattern, including character classes
  - `/[abc][12]/` would match any two characters that begin with 'a', 'b', or 'c', and the second character is '1', or '2'
- Inside a Character Class the meta-characters are greatly reduced
  - `^ \ - [ ]` are the only meta characters inside a character class
  - all other meta characters are their character literal counter-part inside a character class
  - Some meta-characters are only meta-characters in certain situations.
    - ^ can be used as a non-meta character as long as it isn't the first character in the character class.
    - You can use - as a non-meta character if it is the first character in the class.
    - *note*: you can escape any of the special characters even if it's not needed. 
      - Even though `/[+*]/` will search for the character literals:
        - `[\+\*]` works as well

#### Range of Characters
- natural sequences of characters can be searched for.
  - sequences like letters a through z `/[a-z]/`
  - integers 1 through 9 `/[1-9]/`
  - You can also concatenate the ranges, for example:
    - `/[0-9A-Fa-f]/` would match any string with an integer 0-9 or a letter a-f regardless of case.
  - Keep in mind to only use ranges with alphanumeric characters, and to not mix upper and lowercase ranges

#### Negated Classes
- You can prepend a ^ (caret) inside a character class to match with all characters that are *not* the specified character.
  - `/[^y]/` would match any character that is not a lowercase 'y'
  - Note that caret has different behaviors depending on if it's inside a character class or outside. (in both instances it must come before the characters).
  - Emphasis on the caret matching ANY character as long as it's not the specified characters

#### Capture Groups and String Transformation
- capture groups are created using () (parentheses), the first pair will be 1, second pair 2 (till 9)
  - if inside regex, the capture group is referenced by a forward slash and it's number ex: \1
  - if outside regex and used in an argument such as with .replace(regex, stringToReplaceWith), it is used with a $1 to reference the capture group