#!/usr/bin/env bash

mkdir -p allure-results/history
outPutFile
while read url; do
    echo "$url"
    if [[ "$url" == *"categories-trend.json"* ]]; then
      outPutFile=allure-results/history/categories-trend.json
    elif [[ "$url" == *"duration-trend.json"* ]]; then
      outPutFile=allure-results/history/duration-trend.json
    elif [[ "$url" == *"history-trend.json"* ]]; then
        outPutFile=allure-results/history/history-trend.json
    elif [[ "$url" == *"history.json"* ]]; then
        outPutFile=allure-results/history/history.json
    elif [[ "$url" == *"retry-trend.json"* ]]; then
        outPutFile=allure-results/history/retry-trend.json
    else
      echo "History json files not found"
    fi

    curl -L --request GET \
            --url "$url" \
            --header 'Circle-Token: 64ba69220418c40e1a2ce27aa3bc0a00db8213c2' >> outPutFile
done <allure_history_url.txt