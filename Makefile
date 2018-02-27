
DOC = resume.tex

all:
	pdflatex $(DOC)

clean:
	rm $(DOC:.tex=.log) $(DOC:.tex=.aux) $(DOC:.tex=.out) $(DOC:.tex=.pdf)

clean-not-pdf:
	rm $(DOC:.tex=.log) $(DOC:.tex=.aux) $(DOC:.tex=.out)
