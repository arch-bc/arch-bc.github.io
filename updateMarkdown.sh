#!/bin/sh

function updateMarkdown {

    markdownFile=$1
    if [ -f $markdownFile ]; then
        echo
    else
        echo
        echo "Error: $markdownFile does not exist"
        echo
        exit
    fi

    sed '/images:/,$d' $markdownFile >$markdownFile.new
    
    echo images: >>$markdownFile.new
    
    ls -d -1 $2mobile/* >images.txt
    awk '// {print "  - mobile: /" $0}' images.txt >>$markdownFile.new
    ls -d -1 $2desktop/* >images.txt
    awk '// {print "  - desktop: /" $0}' images.txt >>$markdownFile.new

    echo --- >>$markdownFile.new
    
    mv $markdownFile.new $markdownFile
    
    rm images.txt
}

if [ ${#@} != 2 ]; then
    echo
    echo "Usage: $0 markdownFile imagesFolder"
    echo "e.g. ./$0 ./_services/surveys.md ./imgs/surveys"
    echo
    exit
fi

updateMarkdown $1 $2
