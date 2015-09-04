
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=200)
    tel = forms.CharField(max_length=20)
    email = forms.EmailField()
    note = forms.CharField(widget = forms.Textarea)


