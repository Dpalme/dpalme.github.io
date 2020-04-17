class Project(object):
    def __init__(self, name, year, skills, description, view, source=None):
        self.name = name
        self.year = year
        self.skills = skills
        self.description = description
        self.view = view


projects = [Project("Peoria", "2020", "CSS", "A lightweight CSS library that derives from skeleton for faster, cleaner css.", "https://dpalme.github.io/Peoria"),
            Project("Tecmun Website", "2020", "Django, HTML, CSS, Ajax",
                    "Django website made for the model united nations of ITESM CEM.", "http://tecmun.org/"),
            Project("Refugio San Gregorio", "2019", "HTML, CSS",
                    "A website for a dog refuge located in Mexico City.", "https://refugiosangregorio.com/"),
            Project("The Getter", "2017", "Unity, C#", "A game about catching cubes before the timer runs out.",
                    "https://drive.google.com/open?id=0B5xSt2wAJGz3VFBJemxVMWFvMlk"),
            Project("Running in the 80's", "2017", "Unity, C#", "Small game where you drive on a finite procedural road.", "https://drive.google.com/open?id=0B5xSt2wAJGz3SDlkZjRCNkRCUWs")]

final_string = ""

for pr in projects:
    final_string += """
    <div class="half column gutter-margin-bottom">
        <div class="card">
            <div class="twelve columns">
                <h4 class="text-center">%s</h4>
                <p class="text-center">%s</P>
                <p class="text-right orange">%s</P>
                <p>%s</p>
            </div>
            <div class="twelve columns">
                <a href="%s"
                    class="block button twelve columns half-gutter-margin-vertical" target="_blank">View</a>
            </div>
        </div>
    </div>
    """ % (pr.name, pr.year, pr.skills, pr.description, pr.view)


print(final_string)
