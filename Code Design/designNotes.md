# Software Construction Design Notes (Following reading of _Code Complete_ by Steve McConnell
* Software design is the process of converting a real world
  problem into a programming solution.

* The primary goal of software design is to minimize the accidental
  and essential complexities of converting real life to
  ones and zeroes.
---
### Characteristics of the Software Design process.
Software design is...
* Sloppy
    * Designing software is inevitably very messy and [wicked](https://en.wikipedia.org/wiki/Wicked_problem).
      This is because the process of turning a real world problem into ones and zeros, and working at the computer-human
      interface, is inherently complex and always will be. This complexity makes the act of designing software
      more about tradeoffs and trial and error (wicked) to find a __best__ solution, as opposed to there being one right
      way to go about writing any single peice of code. Software design is as messy as humans and their problems.
      
* Emergent
    * Software is a field that is constantly evolving. And changing with it is what may be considered a best software
      solution to a problem. One solution may have been top tier about 10 years ago, but that same solution is likely
      considered very outdated and inefficient now. People using software solutions may change as well. A person may
      have preferred one solution a year or two ago, but the goals they have for their software solution may have changed
      since then and therefore that solution is no longer optimal and must change. Optimal software design solutions are
      constantly evolving, likely as a result of change in the humans that employ them.
* Non-deterministic/heuristic
    * Likely due to it's sloppy and emergent nature, software design is a practice that is non-deterministic. There is no
      one conclusion/answer to be found at the end of a line of reasoning, but instead a list of options that may give
      different benefits to and solve your real world problem in different ways.

