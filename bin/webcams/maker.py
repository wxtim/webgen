import sys
import os

if sys.argv[1] == 'debug':
    debug = True
else:
    debug = False

OUTPUT_DIRECTORY = '/home/h02/tpilling/public_html/webcams/'
PLACE_LISTS = '/home/h02/tpilling/webcams/raw/'
VERSION = '1.0'
CREATION_DATE = '24/11/2016'

inputs = os.listdir(PLACE_LISTS)
output_fpaths = [OUTPUT_DIRECTORY + item.replace(".csv",".html") for item in inputs]
input_fpaths = [PLACE_LISTS + item for item in inputs]

if debug == True:
    print "the output and input file paths are: "
    print output_fpaths
    print input_fpaths


def main():
    for i, input_fpath in enumerate(input_fpaths):
        header_data_pointer = open('/home/h02/tpilling/webcams/header', 'r')
        camera_data = open(input_fpath, 'r')
        camera_data_pointer = open('/home/h02/tpilling/webcams/template', 'r')
        camera_data_template = camera_data_pointer.read()
        output = open(output_fpaths[i], 'w')
    
        for line in header_data_pointer.readlines():
            output.write(line)
        lines = camera_data.readlines()
        lines = lines[1:]
        for line in lines:
            line = line.split(',')
            if debug == True:
                print line
            if  'TRUE' in line[-1]:
                url_page = line[5]
                url_img = line[4]
                cam_description = line[-2]
                cam_number = line[0]
                output.write(camera_data_template.format(url_page,
                                                         url_img,
                                                         cam_number,
                                                         cam_number,
                                                         cam_description))
            else:
                pass


if __name__ == "__main__":
    main()
