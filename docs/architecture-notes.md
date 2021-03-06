# Architecture Notes

## Front-End Research

The following options were considered;

### Option 1: Re-skin legacy ASP pages

Re-skin the app, rendering the pages as static html generated by a combination of asp and c.net code powered by a MS IIS server.

**Pros**

1. Can re-use the back-end architecture pretty much as-is, with some mapping of form data.
   
**Cons**

1. A large learning curve of the existing code.
2. We're going to have to touch every page, so none or very-litte existing code will be re-used.
3. We're not moving the stack forward.
4. Maintenance will continue to be an issue.
5. And changes to the site are difficult.
6. Site performance will be an issue, but can be mitigated by caching strategies.
7. Each form page maps to a table in the database (i.e. the view data model maps to the controller data models). Therefore changing the order of questions, form pages will require mapping the data.

### Option 2: Static site generator

Generate the front-end site using a static site generator such as [Gatsby](https://www.gatsbyjs.org/) or [11ty](https://www.11ty.dev/).

**Pros**

2. Can generate the entire site from a configuration file, so in theory changes would be easy (simply regenerate the site).
3. More performant as site is rendered out to static html/js/css files.
   
**Cons**

1. Configuration is pretty complex and messy.
2. Need to train client on how to use it.
3. A lot of work to create the basic site theme.
4. **Very hard** to tie into a custom back-end.


### Option 3: Use the US Forms system from USDS

Change the front-end to using the [US Forms system](https://github.com/usds/us-forms-system), a static site generator.

**Pros**

1. Tap into existing work at USDS (though it looks like it's not active and using an older version of USWDS).
2. Can generate the form content from a configuration file, so changes would be easy (simply regenerate the site).
3. More performant.
   
**Cons**

1. Uses React, and the client does not have developers capable of maintaining or supporting a React app.
2. The form generator doesn't generate the whole site, so we'd need to create a build system that can layer the generated content into the rest of the site.
3. The spec for the form configuration is very complex, developer centric and also ties into React itself.

### Option 4: VueJS/Angular with form generation

Change the front-end to using a VueJS (or Angular) applicaiton with a dynamic form generator.

**Pros**

1. VueJS is closer to vanilla html/js/css so easier for client to maintain. Also easier designers to work on code.
2. Angular is also close to vanilla html/css but uses typescript which is a learning curve.
3. Much easier for junior developers to pickup and run with.
4. Can generate form using a form config, and we can create a user-centric form spec.
5. Easy to tie in with existing or modified back-end.

**Cons**

1. Angular is heavier than VueJs, and documentation sucks so would lean into VueJS. 
2. Need to build USWDS components as they don't exist yet.

### Option 5: React with form generation

Change the front-end to using a React application with a dynamic form generator.

**Pros**

1. Can generate form using a form config, and we can create a user-centric form spec.
2. Easy to tie in with existing or modified back-end.
3. USWDS components already [exist](https://github.com/trussworks/react-uswds).

**Cons**

1. React is a little more complex, harder for junior devs and very hard for non-developers to work with. But for smaller apps like this, probably not too much of an issue.
2. Client doesn't have the capacity to support more complex JS apps (possibly).
3. React USWDS components are out-of-date and the USWDS framework is bundled with it making modification of the theme a little trickier.


## Back-End Research

We are considerably more constrained on the back-end, some points to consider;

1. Nearly all of the business logic is in the Oracle database (stored procedures).
2. Back-end is marged with front-end (asp mixed with c.net).
3. Site powered by MS IIS.
4. No deployment pipeline (yet?).

We could move the back-end code to a micro-services based node.js app, or leave the c.net and modify to create API end-points to support new architecutre.