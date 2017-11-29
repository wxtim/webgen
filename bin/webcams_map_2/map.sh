#!/bin/bash
module load scitools/default-next
cd /home/h02/tpilling/webgen/bin/webcams_map_2
python2.7 map_maker.py
cp map.js m_airfield_data/map.js
