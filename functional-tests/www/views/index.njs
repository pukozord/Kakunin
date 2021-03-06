{% extends 'layout/default.njs' %}

{% block content %}
  <div class="available-examples-links">
    <a name="linkPage" href="/form/simple">Drag and drop example</a><br/>
    <a name="linkPage" href="/form/simple">Simple form example</a><br/>
    <a name="linkPage" href="/absolute-page">Absolute page</a><br/>
    <a name="linkPage" href="https://www.google.pl">Google page</a><br/>
    <a name="linkPage" class="valueForClickStep" href="/tabular-data">Simple table example</a><br/>
    <a name="linkPage" class="valueForClickStep" href="/form/disappear"> Simple button disappear</a><br/>
    <a name="linkPage" class="appearTable" href="/wait-for-appear/table"> Simple wait for table</a><br/>
    <a name="linkPage" class="appearForm" href="/wait-for-appear/form"> Simple wait for form</a><br/>
    <a name="linkPage" class="matchers" href="/matchers">Simple matchers</a><br/>

  </div>
{% endblock %}
