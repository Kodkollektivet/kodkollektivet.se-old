
# Kodkollektivet.se API description
### http://api.kodkollektivet.se
#### The Rest API provides information about Kodkollektivet projects, members and related info.

# Setup development environment
* install Python > 2.7.9
* install pip if not installed
* create Python virtualenv, virtualenvwrapper is recommented
* navigate to kodkollektivet.se/server/ folder
* pip install -r requriments.txt
* python manage.py runserver 0.0.0.0:8001
* go to [localhost port 8001](http://127.0.0.1:8001/) for browseable API
* go to [localhost port 8001](http://127.0.0.1:8001/admin/) for admin page


Other:
* python manage.py createsuperuser  # Create superuser
* webhook available at /github/webhook/



# API Endpoints

## Info

/info/

### ! This will be removed, dont use!!


## /project/

### Project
#### This endpoint returns a pagination object.
#### In the results list is the project objects.

Returns

* "count" : int
* "next" : link to next pagination page
* "previous" : link to previous pagination page
* "results" : list of projects
  * "slug" : string
  * "name" : string
  * "about" : string
  * "gh_name" : string
  * "gh_id" : int
  * "gh_url" : string



## /contributor/

### Contributor

#### This endpoints returns all contributors

Return

* "slug" : string
* "name" : string
* "email" : string
* "website" : string
* "about" : string
* "gh_login" : string
* "gh_url" : string
* "gh_html" : string



## /language/

### Language

#### This endpoints returns all languages

Return

* "slug" : string
* "name" : string



## /role/

### Role

#### This endpoints returns all roles

Return

* "role" : string
* "slug" : string



## /framework/

### Framework

#### This endpoints returns all frameworks

Return

* "slug" : string
* "name" : string



## /procon/

### Procon

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "contributor" : string



## /prolan/

### Prolan

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "language" : string



## /prorol/

### Prorol

#### This endpoints returns all project <-> contributor <-> role relations

Return

* "project" : string
* "contributor" : string
* "role" : string


## /profra/

### Profra

#### This endpoints returns all project <-> framework relations

Return

* "project" : string
* "framework" : string

