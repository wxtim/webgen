"""
A script to create web scraping webcam pages
"""
import os
from glob import glob
from csv import DictReader

# Set location of master folder and dict containing handy variables
# Probably should be replaced with argparse input var, at least for
# HOME_FOLDER
HOME_FOLDER = '/home/h02/tpilling/webgen'
ENV = {'HTML_RESOURCE': glob(os.path.join(HOME_FOLDER, 'html/webcams/*')),
       'OUTPUT_DIRECTORY': os.path.join(HOME_FOLDER, 'test/webcams/'),
       'INPUT_FILE': os.path.join(HOME_FOLDER, 'test/webcams/master_list.csv'),
       'VERSION': '2.0.alpha',
       'CREATION_DATE': '30/11/2017'}


def quality_control(webcams_ls):
    """Take a list of webcam dictionaries and carry out quality control
    functions"""
    return webcams_ls


def get_dashboards_list(webcams_ls):
    """takes a list of webcam dictionary
    returns a list of dashboards"""
    dashboards = []
    for key, _ in webcams_ls[0].iteritems():
        if 'dashboard' in key:
            dashboards.append(key)
    return dashboards


def create_dashboard(webcams_ls, dashboard):
    """Takes a list of webcams and creates a dashboard style
    webpage"""
    return None


def create_map(webcams_ls):
    """Creates a map"""
    return None


def main():
    """Main"""
    reader = DictReader(open(ENV['INPUT_FILE']))
    webcams = [line for line in reader]
    webcams = quality_control(webcams)
    dashboards = get_dashboards_list(webcams)
    print dashboards
    for dashboard in dashboards:
        create_dashboard(webcams, dashboard)


if __name__ == "__main__":
    main()
