#!/usr/bin/ruby

d = Dir.new(".")
pdfs = []
d.each { |f| pdfs << f if f.downcase =~ /^[a-z].*pdf/ }
pdfs.each do |p|
  cmd = "pdftotext #{p}"
  puts cmd
  system cmd
end

