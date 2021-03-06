Tutorial: https://thinkster.io/django-angularjs-tutorial#learning-django-and-angularjs

## Changes
1. I am using Python 3.5, so I had to modify the requirements.txt file to change the django version number and get rid of the wsgiref requirement (because it comes pre-installed in Python3)
2. In "Extending Django's Built-In User Model" section, the folder name containing the settings.py file might not be correct. I changed the settings.py file inside the boilerplate folder.
3. The bower_components folder was installed in my root directory, so I moved it to the "static" directory.
4. In register.controller.js and authentication.service.js, changed the order to "email", "username", and "password"
5. In urls.py, added "include" to the list of things to import
6. In views.py, added more imports from the rest_framework
7. If trying to fix a 405 error at the end of the "Registering new users" section, try doing steps 4-6 and then restart the server.
8. If having problems trying to log users in, modify how the request is being parsed in views.py. Take out the "data.json.loads(request.body) line" and change the next two lines to "request.data.get".
9. In "Making a Post model" --> "Making the IsAuthorOfPost permission", the checkmark says "make a new permission called 'IsAuthenticatedAndOwnsObject' in 'posts/permissions.py'." That doesn't quite match the name of the function in the instructions, 'IsAuthorOfPost'.
10. In "posts/serializers.py", the line should be "from authentication.serializers import AccountSerializer".

## Etc.
1. Haven't been able to get Snackbar working. Just used the console to view any error messages.
2. I can't change username or delete profiles. https://github.com/brwr/thinkster-django-angular-tutorial/issues/20
3. Adding new post through the interface doesn't work. Will probably fix later.