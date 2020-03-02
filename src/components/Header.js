import React from 'react';
import { Link } from 'gatsby';
import NameLogo from '../../assets/name-logo.svg';

export default () => (
    <header className="section">
      <div className="columns">
        <div className="column">
          <div className="is-2 header-logo">
            <Link to="/" className="logo-link">
              <NameLogo />
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="is-6 header-info">. . art . . .. . ✵ · ˚ ˚ . programming ✹ . ˚words . speculative futures ✧ ⊹ </div>
        </div>
      </div>
    </header>
)