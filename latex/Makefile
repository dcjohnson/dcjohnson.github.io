
DOC = resume.tex

all:
	pdflatex $(DOC)
	mv $(DOC:.tex=.pdf) ../pdf/

clean:
	rm $(DOC:.tex=.log) $(DOC:.tex=.aux) $(DOC:.tex=.out) ../pdf/$(DOC:.tex=.pdf)

clean-not-pdf:
	rm $(DOC:.tex=.log) $(DOC:.tex=.aux) $(DOC:.tex=.out)
