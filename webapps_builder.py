class WebApp(object):
    def __init__(self, name, description, link):
        self.name = name
        self.description = description
        self.link = link


webapps = [WebApp("Random Poem/Song", "Get a random poem or song lyrics from a growing collection", "https://dpalme.github.io/Random-Poem/"),
           WebApp("Caesar Cypher", "Decodes messages encrypted using the Caesar cyphering method", "https://dpalme.github.io/CaesarCypher/"),
           WebApp("Random Question", "Get a random question", "https://dpalme.github.io/Random-Question/"),
           WebApp("Decision Maker", "Chooses a random option", "https://dpalme.github.io/WebApps/DecisionMaker.html"),
           WebApp("Cillisi", "Replaces all vowels on a text with i", "http://127.0.0.1:5500/WebApps/cillisi.html")]

colors = ["red", "orange", "green", "yellow", "blue"]

final_string = ""

for wa in webapps:
    final_string += """
    <a class="block half column gutter-margin-bottom" href="%s">
        <div class="card text-center rounded">
          <h4>%s</h4>
          <p>%s</p>
        </div>
    </a>
    """ % (wa.link, wa.name, wa.description)


print(final_string)
