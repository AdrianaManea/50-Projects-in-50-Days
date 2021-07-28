- Add event listener to x icon
- once clicked, toggle an active class

  - nav shrinks
  - links rotate and ultimately disappear by setting the opacity to zero
  - the x does a rotation and turns into = sign/ two lines

- when:

  - non active state
    - nav {width: 80px;}
    - nav ul {width: 0}
    - nav ul li {transform: rotateY(0deg); opacity: 0; transition: transform 0.6s linear, opacity 0.6s linear;}
    - .icon .line { transition: transform 0.6s linear; }
  - active
    - nav {width: 360px;} - active to begin with
    - nav.active ul li { opacity: 1; transform: rotateY(360deg); }
    - nav.active .icon .line1 { transform: rotate(-320deg) translateY(5.5px); }
    - nav.active .icon .line2 { transform: rotate(320deg) translateY(-5.5px); }
