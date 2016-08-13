(use-modules (haunt asset)
             (haunt site)
             (haunt builder blog)
             (haunt builder atom))

(site #:title "Dylan's Personal Site"
      #:domain "dcjohnson.github.io"
      #:default-metadata
      '((author . "Dylan Johnson")
        (email . "dylanatasmsa@gmail.com")))
