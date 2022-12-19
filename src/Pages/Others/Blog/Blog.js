import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeProvider/ThemeProvider";

const Blog = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className={`${darkTheme ? 'bg-gray-700 text-gray-300' : 'bg-white'}`}>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Question and Answer
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          The 4 Burning Question
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">What is cors?</h3>
            <p className="mt-1">
              Its full Form is Cross-origin resource sharing. Its a resource
              sharing mechanism that allows restricted resources on a web
              page to be requested from another domain outside the domain from
              which the first resource was served. A web page may freely embed
              cross-origin images, stylesheets, scripts, iframes, and videos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Why are you using firebase ? What other options do you have to
              implement authentication?
            </h3>
            <div className="mt-1">
              I mainly used firebase for authenticate a user with its build in
              authentication system. Also for hosting my website instance in
              netlify.
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  If we want to implement authentication we have to follow some
                  step.
                </summary>
                <div className="px-4 pb-4">
                  <ul>
                    <li>
                      First create project in firebase and also a project with
                      web icon in our firebase project overview
                    </li>
                    <li>Then go to authentication.</li>
                    <li>
                      And enable the authentication i want to implement with
                      enable button.
                    </li>
                    <li>
                      First to authenticate with gmail or email password we only
                      need to enable email and for gmail provide a gmail then
                      done.{" "}
                    </li>
                    <li>
                      For Third party authentication we need extra procedure.
                      Firebase need third party app secret key and user id those
                      are given with developer account. And in third party
                      developer app we need to copy the redirect handler uri and
                      paste in developer app redirect or callback uri.{" "}
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">How does the private route work?</h3>
            <div className="mt-1">
              <p>
                In a route if we don't want to give access to an unauthorize
                user. Then we use private route.
              </p>
              <p>
                In element we call the component that we don't want give access
                as private route component child which check if a user is
                authenticate or not.
              </p>
              <p>
                In the private route component first we check the user is
                authenticate by calling AuthContext if user is not authenticate
                then we user will be null otherwise the user have object with
                user information.
              </p>
              If Authenticate then we return the user in children of private
              route otherwise we send user to login.
            </div>
          </div>
          <div>
            <h3 className="font-semibold">What is Node? How does Node work?</h3>
            <div className="mt-1">
              <p>
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications.
              </p>
              <p>
                Node. js runs on chrome v8 engine which converts javascript code
                into machine code.
              </p>
              <p>
                It runs a single-threaded event loop registered with the system
                to handle connections, and each new connection causes a
                JavaScript callback function to fire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
