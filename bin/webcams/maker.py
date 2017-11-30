import sys
import os
from csv import DictReader



OUTPUT_DIRECTORY = '/home/h02/tpilling/webgen/bin/webcams/'
input = '/home/h02/tpilling/webgen/bin/webcams/depot_webcams/master_list.csv'
VERSION = '1.9'
CREATION_DATE = '30/11/2017'

def quality_control(webcams_ls):
    """Take a list of webcam dictionaries and carry out quality control
    functions"""
    return webcams_ls

def get_dashboards_list(webcams_ls):
    """takes a list of webcam dictionary
    returns a list of dashboards"""
    dashboards = []
    for key, value in webcams_ls[0].iteritems():
        if 'dashboard' in key:
            dashboards.append(key)
    return dashboards

def create_dashboard(webcams_list, dashboard):
    """Takes a list of webcams and creates a dashboard style 
    webpage"""
    return None

def creat_map(webcams_list):
    return None

def main():
    """Main"""
    reader = DictReader(open(input))
    webcams = [line for line in reader]
    #print webcams
    webcams = quality_control(webcams)
    dashboards = get_dashboards_list(webcams)
    print dashboards
    for dashboard in dashboards:
        create_dashboard(webcams, dashboard)
    

if __name__ == "__main__":
    main()
    