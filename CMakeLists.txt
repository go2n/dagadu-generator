project(Dagadu)
cmake_minimum_required (VERSION 2.8)

find_package(KDE4 REQUIRED)

include(KDE4Defaults)

add_definitions (${QT_DEFINITIONS} ${KDE4_DEFINITIONS})
include_directories(
   ${CMAKE_SOURCE_DIR}
   ${CMAKE_BINARY_DIR}
   ${KDE4_INCLUDES}
   )

install(DIRECTORY Dagadu/ DESTINATION ${DATA_INSTALL_DIR}/plasma/plasmoids/Dagadu)
install(FILES Dagadu/metadata.desktop DESTINATION ${SERVICES_INSTALL_DIR} RENAME plasma-applet-Dagadu.desktop)