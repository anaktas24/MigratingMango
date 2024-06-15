import React from 'react';
import '../styles/NotFound.css';

function NotFound() {
  return (
      <div class="error">
        <div class="wrap">
          <div class="404">
            <pre><code>
            <span class="green">&lt;!</span><span>DOCTYPE html</span><span class="green">&gt;</span>
            <span class="orange">&lt;html&gt;</span>
            <span class="orange">&lt;style&gt;</span>
          * {
        }
            <span class="orange">&lt;/style&gt;</span>
            <span class="orange">&lt;body&gt;</span>
                      ERROR 404!
                FILE NOT FOUND!
            <span class="comment">&lt;!--The file you are looking for,
                  is not where you think it is.--&gt;
            </span>

            <br />
            <span class="info"></span>
              <br />

              <span class="orange">&nbsp;&lt;/body&gt;</span>

              <br/>
              <span class="orange">&lt;/html&gt;</span>
              </code></pre>
         </div>
        </div>
      </div>
  );
}

export default NotFound;
