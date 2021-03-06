const HeaderNav = () => {
  return ( 
    <nav className="header-nav">
      <ul className="navigation">
        <li>
          <a href="https://github.com/auth0/identicons" target="_blank">
            <img className="github" src="../static/site/github-icon.svg" width="16" /> Usage & Contributions
          </a>
        </li>

        <li>
          <a className="btn btn-transparent btn-sm" href="../static/icons/identicons-set-v1.zip" download>
            Old Version
          </a>
        </li>
      </ul>
      <style jsx>{`
          .header-nav {
            float: right;
            display: block;
          }

          .navigation {
            margin: 0;
            padding:0;
          }

          .navigation li {
            margin: 0;
            padding:0;
            list-style: none;
            display: inline-block;
            margin-left: 25px;
            vertical-align: middle;
          }

          .navigation li a{
            color: black;
          }
          
          .github {
            margin-right: .4rem;
            margin-bottom: 2px;
            vertical-align: center;
          }

          .btn-sm {
            font-family: fakt-web, Helvetica Neue,Hevetica,sans-serif;
            text-transform: capitalize;
            font-weight: 400;
          }

          @media(max-width: 600px) {
            .header-nav {
              display: none;
            }
          }

        `}
      </style>
    </nav>
  );
}

export default HeaderNav;