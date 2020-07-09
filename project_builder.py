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
                    "A website for a dog refuge located in Mexico City.", "https://refugiosangregorio.com/")]

final_string = ""

for pr in projects:
    final_string += """
    <a class="block col-margin-bottom" href="%s" target="_blank">
        <h3 class="w-200 justify">%s</h3>
        <p class="text-left one-third column margin-none small-body w-200">%s</p>
        <p class="text-right two-thirds column text-right orange">%s</p>
        <p class="justify">%s</p>
    </a>
    """ % (pr.view, pr.name, pr.year, pr.skills, pr.description)


print(final_string)
